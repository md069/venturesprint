"use client";

import React, { useEffect, useState, useCallback } from "react";

/**
 * A string containing all possible characters used in the animation effect.
 * Includes lowercase letters and common symbols.
 */
const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

/**
 * Props interface for the AnimatedText component.
 * @interface AnimatedTextProps
 */
interface AnimatedTextProps {
  /** The final text to be displayed after animation */
  text: string;
}

/**
 * AnimatedText is a component that creates a "matrix-like" text reveal animation.
 * It initially shows random characters that gradually transform into the final text.
 *
 * @component
 * @example
 * ```tsx
 * <AnimatedText text="Hello World" />
 * ```
 *
 * @param {AnimatedTextProps} props - The component props
 * @returns {JSX.Element} A div containing the animated text
 */
export function AnimatedText({ text }: AnimatedTextProps) {
  const [animatedText, setAnimatedText] = useState("");

  /**
   * Returns a random character from the lettersAndSymbols string.
   * @returns {string} A single random character
   */
  const getRandomChar = useCallback(
    () =>
      lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    [],
  );

  /**
   * Handles the text animation sequence:
   * 1. Shows random characters for a brief period
   * 2. Gradually reveals the actual text from left to right
   * 
   * Animation timing:
   * - Initial random animation: 300ms
   * - Character update interval: 50ms
   * - Character reveal interval: 80ms
   */
  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 80;
    const initialRandomDuration = 300;

    /**
     * Generates a random string of the same length as the target text
     * @returns {string} Random string of characters
     */
    const generateRandomText = () =>
      text
        .split("")
        .map(() => getRandomChar())
        .join("");

    // Initial random text
    setAnimatedText(generateRandomText());

    // Phase 1: Random character animation
    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    // Phase 2: Gradual text reveal
    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split("")
            .map(() => getRandomChar())
            .join(""),
      );
    }
  }, [text, getRandomChar]);

  /**
   * Triggers the animation when the text prop changes
   */
  useEffect(() => {
    animateText();
  }, [text, animateText]);

  return <div className="relative inline-block">{animatedText}</div>;
}
