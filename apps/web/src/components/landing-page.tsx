'use client'

import * as React from "react"
import { Button } from "../../../../packages/ui/src/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../packages/ui/src/components/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../packages/ui/src/components/accordion"
import { CheckCircle, MessageCircle, DollarSign, HelpCircle, Menu, X, Brain, Sparkles, Clock, Target, Rocket, FileText, Users, Shield } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { SubscribeForm } from "./subscribe-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../packages/ui/src/components/dialog";

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">VentureSprint</h1>
          </div>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-14 md:top-0 left-0 right-0 flex-col md:flex-row items-center p-4 md:p-0 bg-white md:bg-transparent space-y-4 md:space-y-0 md:space-x-8`}>
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>Features</Link>
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>How It Works</Link>
            <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>Pricing</Link>
            <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>FAQ</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-sm">Log in</Button>
            <Dialog>
              <DialogTrigger
                className="text-sm px-4 py-2 bg-secondary text-primary rounded-full font-medium cursor-pointer"
                asChild
              >
                <span>Get updates</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Stay updated</DialogTitle>
                  <DialogDescription>
                    Subscribe to our newsletter to get the latest news and
                    updates.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                  <SubscribeForm
                    group="v1-newsletter"
                    placeholder="Email address"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-[800px]">
                <div className="flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-black/10 px-3 py-1 text-sm font-medium text-black mb-4">
                    New: AI-Powered Market Validation
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none">
                  From Idea to Startup Validation in 14 Days
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 text-xl md:text-2xl font-medium">
                  Stop guessing. Start building with confidence using our AI-powered validation framework.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center">
                <Button className="bg-black text-white hover:bg-gray-800 h-12 px-8 w-full sm:w-auto">
                  Get Started
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4" />
                  <span>14-day money-back guarantee</span>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto pt-8">
                <div className="text-center mb-4 space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    🚀 Apply for Early Access Pilot Program
                  </p>
                  <p className="text-xs text-gray-500">
                    Selected founders get personal support and priority access
                  </p>
                </div>
                <div className="max-w-xl mx-auto">
                  <SubscribeForm 
                    group="pilot-program"
                    placeholder="Enter your email for early access"
                    className="h-12 rounded-full border-black/20 focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 w-full max-w-3xl">
                <p className="text-sm text-gray-500 mb-6">Trusted by 1000+ entrepreneurs from</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">
                  <Image
                    src="/logos/techcrunch.svg"
                    alt="TechCrunch"
                    width={120}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                  <Image
                    src="/logos/forbes.svg"
                    alt="Forbes"
                    width={100}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                  <Image
                    src="/logos/microsoft.svg"
                    alt="Microsoft"
                    width={130}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                  <Image
                    src="/logos/ycombinator.svg"
                    alt="Y Combinator"
                    width={110}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                  <Image
                    src="/logos/sequoia.svg"
                    alt="Sequoia"
                    width={120}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f6f5f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">89%</div>
                <p className="text-gray-500">of teams discovered critical insights that reshaped their product vision</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <p className="text-gray-500">faster path to market validation compared to traditional methods</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">73%</div>
                <p className="text-gray-500">of startups acquired their first paying customers within 30 days</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
              How It Works
            </h2>
            <div className="grid gap-12 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white mb-6 font-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-[#f6f5f4]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
              VentureSprint: Everything You Need to Create Products People Love
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                A complete toolkit for validating your product ideas with real users
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4">
                      {React.cloneElement(feature.icon, { className: "w-12 h-12 text-black" })}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{feature.description}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Start with a single sprint or scale with enterprise features
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="relative border-2 border-black">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Single Sprint</CardTitle>
                  <CardDescription>Everything you need to validate your idea</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">€69</span>
                    <span className="text-gray-500 ml-1">one-time</span>
                  </div>
                  <ul className="space-y-3">
                    {sprintFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-black text-white hover:bg-gray-800">
                    Start Your Sprint
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative border border-gray-200 hover:border-gray-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For teams that need more power & flexibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">Custom</span>
                    <span className="text-gray-500 ml-1">pricing</span>
                  </div>
                  <ul className="space-y-3">
                    {enterpriseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-black text-white hover:bg-gray-800">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-[#f6f5f4]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
              Questions? We've got answers
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 bg-white rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <span className="text-base font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-500">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Ready to transform your ideas into reality?
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Join thousands of entrepreneurs building successful ventures with VentureSprint
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 h-12 px-8">
                  Get Started for €69
                </Button>
                <Button variant="outline" className="h-12 px-8">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f6f5f4]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
              What Founders Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Get the latest startup validation tips and resources delivered straight to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <SubscribeForm 
                  group="newsletter-footer"
                  placeholder="Your email address"
                  className="h-12 rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="container py-16 px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-lg font-semibold mb-4">VentureSprint</h2>
              <p className="text-sm text-gray-500 mb-6">
                Empowering entrepreneurs to validate and launch ventures faster.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="https://twitter.com/venturesprint" 
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link 
                  href="https://github.com/venturesprint" 
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#features" className="text-gray-500 hover:text-gray-900">Features</Link></li>
                <li><Link href="#how-it-works" className="text-gray-500 hover:text-gray-900">How It Works</Link></li>
                <li><Link href="#pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="#faq" className="text-gray-500 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link></li>
                <li><Link href="/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li>
                <li><Link href="/templates" className="text-gray-500 hover:text-gray-900">Templates</Link></li>
                <li><Link href="/support" className="text-gray-500 hover:text-gray-900">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="text-gray-500 hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-500 hover:text-gray-900">Terms</Link></li>
                <li><Link href="/gdpr" className="text-gray-500 hover:text-gray-900">GDPR</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2024 VentureSprint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper constants for content organization
const painPoints = [
  {
    icon: <Clock className="w-12 h-12 text-black" />,
    title: "Save Time",
    description: "Don’t waste months chasing ideas that don't fly. Focus on what truly solves a problem with our AI-guided validation."
  },
  {
    icon: <Shield className="w-12 h-12 text-black" />,
    title: "Reduce Risk",
    description: "Minimize uncertainty with our fast-track process. Quickly define your MVP and steer clear of costly mistakes."
  },
  {
    icon: <DollarSign className="w-12 h-12 text-black" />,
    title: "Make Money",
    description: "Build products customers are eager to pay for. Iterate rapidly towards product-market fit and drive revenue."
  }
]

const solutionFeatures = [
  {
    icon: <Rocket className="w-12 h-12 text-black" />,
    title: "Structured Sprint Process",
    description: "Clear phases and milestones to guide your journey"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-black" />,
    title: "Dynamic Templates",
    description: "Pre-built frameworks for every sprint phase"
  },
  {
    icon: <Brain className="w-12 h-12 text-black" />,
    title: "AI Assistant",
    description: "Smart insights and recommendations"
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-black" />,
    title: "Collaboration Tools",
    description: "Share and export your progress easily"
  }
]

const steps = [
  {
    title: "Define Your Sprint",
    description: "Set your goals and assemble your team in minutes"
  },
  {
    title: "Follow the Process",
    description: "Work through guided phases with AI assistance"
  },
  {
    title: "Validate & Share",
    description: "Get market validation and export your results"
  }
]

const sprintFeatures = [
  "Complete sprint framework",
  "AI-powered insights",
  "All templates included",
  "Team collaboration",
  "Export capabilities",
  "14-day money back guarantee"
]

const enterpriseFeatures = [
  "Everything in Single Sprint",
  "Multiple concurrent sprints",
  "Custom integrations",
  "Dedicated success manager",
  "Priority support",
  "Custom training & onboarding"
]

const faqItems = [
  {
    question: "What exactly is a validation sprint?",
    answer: "A validation sprint is a structured 14-day process where you systematically validate your startup idea. Using our proven framework, you'll move through key phases including problem validation, solution testing, and customer discovery - all designed to prevent building something no one wants."
  },
  {
    question: "What do I get with a single sprint?",
    answer: "Your sprint includes everything needed to validate your idea: our complete validation framework, AI-powered insights, all validation templates, team collaboration tools, and expert guidance. You'll also receive a comprehensive validation report at the end of your sprint."
  },
  {
    question: "Do I need a team to run a sprint?",
    answer: "No, VentureSprint works great for solo founders too! While you can collaborate with a team, many of our successful users are solo entrepreneurs who use our framework and AI tools to validate their ideas independently."
  },
  {
    question: "What happens after my 14-day sprint?",
    answer: "After your sprint, you'll have clear validation results and a detailed report showing whether to proceed, pivot, or rethink your idea. You can purchase additional sprints for new ideas or iterations, or explore our enterprise plan for ongoing validation needs."
  },
  {
    question: "How is this different from traditional validation?",
    answer: "Traditional validation is often unstructured and time-consuming. VentureSprint provides a systematic, AI-enhanced approach that helps you validate ideas 10x faster. Our framework ensures you're asking the right questions and gathering meaningful data to make informed decisions."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 14-day money-back guarantee. If you're not satisfied with your validation sprint for any reason, we'll refund your payment in full - no questions asked."
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechStart",
    avatar: "/avatars/sarah.webp",
    quote: "VentureSprint helped us validate our MVP in just 2 weeks. We saved months of development time and $50K in potential waste."
  },
  {
    name: "Mark Thompson",
    role: "CEO, DataFlow",
    avatar: "/avatars/mark.webp",
    quote: "The AI-powered insights were game-changing. We completely pivoted our approach based on the validation data."
  },
  {
    name: "Lisa Rodriguez",
    role: "Founder, EduTech",
    avatar: "/avatars/lisa.webp",
    quote: "As a solo founder, VentureSprint gave me the structure and confidence to validate my idea before investing my savings."
  }
]

// Update features constant with more detailed information
const features = [
  {
    icon: <Rocket className="w-12 h-12 text-black" />,
    title: "Structured Sprint Process",
    description: "Follow a proven framework to validate your ideas in 14 days",
    capabilities: [
      "Step-by-step sprint guides",
      "Progress tracking",
      "Milestone checkpoints",
      "Customizable timelines"
    ]
  },
  {
    icon: <FileText className="w-12 h-12 text-black" />,
    title: "Dynamic Templates",
    description: "Start fast with pre-built templates for every phase",
    capabilities: [
      "Customer interview scripts",
      "Value proposition canvas",
      "User testing frameworks",
      "Market research guides"
    ]
  },
  {
    icon: <Brain className="w-12 h-12 text-black" />,
    title: "AI-Powered Insights",
    description: "Get smart recommendations based on your progress",
    capabilities: [
      "Market opportunity analysis",
      "Competitor insights",
      "User feedback analysis",
      "Strategic recommendations"
    ]
  },
  {
    icon: <Users className="w-12 h-12 text-black" />,
    title: "Team Collaboration",
    description: "Work together seamlessly and share results",
    capabilities: [
      "Real-time collaboration",
      "Role-based access",
      "Export ready reports",
      "Progress sharing"
    ]
  }
]

