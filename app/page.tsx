import Link from "next/link"
import { ArrowRight, ShoppingBag, Clock, Brain, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Shopgentic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:underline underline-offset-4">
              Use Cases
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/chat">
              <Button>Try It Now</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container flex flex-col items-center text-center">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/10"></div>
            <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-center bg-no-repeat opacity-5"></div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Shopping Simplified by AI
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Find perfect products across the web in minutes, not hours. Your personal AI shopping assistant that
              learns your preferences.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#features">
                <Button variant="outline" size="lg" className="gap-2">
                  Learn More <ChevronDown className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" className="gap-2">
                  Try It Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Shopgentic?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our AI-powered platform revolutionizes how you shop online
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>One Tab, Not Forty</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Save time with consolidated search across hundreds of retailers in a single interface.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Personalized to You</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our AI learns your preferences over time, making increasingly accurate recommendations.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Complete Shopping Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    From search to purchase to tracking, we handle the entire shopping journey.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Real-time Product Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stay updated on price drops, restocks, and new releases for products you care about.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A seamless shopping experience powered by artificial intelligence
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-16 relative">
                {[
                  {
                    step: 1,
                    title: "Tell Shopgentic what you're looking for",
                    description:
                      "Describe what you want in natural language, just like talking to a friend. Include details about style, budget, and preferences.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    step: 2,
                    title: "Review AI-curated options based on your preferences",
                    description:
                      "Our AI searches across the web to find products that match your criteria, presenting you with the best options.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    step: 3,
                    title: "Compare purchasing options across different retailers",
                    description:
                      "See prices, shipping times, and reviews from multiple stores to make the best decision.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    step: 4,
                    title: "Complete purchase with stored information",
                    description: "Checkout securely without having to enter your information on multiple websites.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    step: 5,
                    title: "Track delivery and receive updates",
                    description:
                      "Monitor your order status and get notifications about shipping, delivery, and any issues.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                    <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div className="relative">
                        <div className="absolute -left-4 md:left-auto md:-right-12 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10">
                          {item.step}
                        </div>
                        <div className="bg-card rounded-lg shadow-lg p-6 border">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`Step ${item.step}: ${item.title}`}
                        className="rounded-lg shadow-md w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Showcase */}
        <section id="use-cases" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Use Cases</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See how Shopgentic can help with your specific shopping needs
              </p>
            </div>
            <Tabs defaultValue="shoes" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="shoes">Budget Shopping</TabsTrigger>
                <TabsTrigger value="monitor">Price Monitoring</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
                <TabsTrigger value="similar">Similar Products</TabsTrigger>
              </TabsList>
              <TabsContent value="shoes" className="mt-6">
                <div className="bg-card rounded-lg shadow-lg p-6 border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-3 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-muted rounded-2xl p-4 max-w-[80%]">
                        <p>
                          I'm looking for shoes similar to Nike Air Force 1s but under $80. I wear size 10 and prefer
                          white.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="bg-primary/10 rounded-2xl p-4 max-w-[80%]">
                        <p>I found several options similar to Nike Air Force 1s under $80:</p>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          <div className="bg-background rounded p-2">
                            <img
                              src="/placeholder.svg?height=100&width=100"
                              alt="Shoe option 1"
                              className="rounded mb-2"
                            />
                            <p className="text-sm font-medium">Puma Carina - $75</p>
                            <p className="text-xs text-muted-foreground">Similar style, 4.5/5 stars</p>
                          </div>
                          <div className="bg-background rounded p-2">
                            <img
                              src="/placeholder.svg?height=100&width=100"
                              alt="Shoe option 2"
                              className="rounded mb-2"
                            />
                            <p className="text-sm font-medium">Reebok Classic - $69</p>
                            <p className="text-xs text-muted-foreground">White, leather upper, 4.3/5 stars</p>
                          </div>
                        </div>
                        <p className="mt-3">Would you like more details on either of these options?</p>
                      </div>
                      <div className="bg-primary rounded-full p-3">
                        <Brain className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="monitor" className="mt-6">
                <div className="bg-card rounded-lg shadow-lg p-6 border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-3 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-muted rounded-2xl p-4 max-w-[80%]">
                        <p>
                          I want to buy a Sony WH-1000XM5 headphones but they're too expensive right now. Can you alert
                          me when they go on sale below $300?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="bg-primary/10 rounded-2xl p-4 max-w-[80%]">
                        <p>
                          I'll monitor the Sony WH-1000XM5 headphones for you. The current lowest price is $348 at
                          Amazon.
                        </p>
                        <div className="bg-background rounded p-3 mt-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Price Alert Set</p>
                              <p className="text-sm text-muted-foreground">Sony WH-1000XM5</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-primary">Target: $300</p>
                              <p className="text-sm text-muted-foreground">Current: $348</p>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3">
                          I'll notify you as soon as the price drops below $300 at any major retailer. Would you like me
                          to also alert you about any flash sales or special promotions?
                        </p>
                      </div>
                      <div className="bg-primary rounded-full p-3">
                        <Brain className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="returns" className="mt-6">
                <div className="bg-card rounded-lg shadow-lg p-6 border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-3 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-muted rounded-2xl p-4 max-w-[80%]">
                        <p>I need to return the jacket I bought from Nordstrom last week. It doesn't fit right.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="bg-primary/10 rounded-2xl p-4 max-w-[80%]">
                        <p>
                          I found your Nordstrom purchase from April 28th for a Columbia Windbreaker Jacket ($89.99).
                        </p>
                        <div className="bg-background rounded p-3 mt-3">
                          <p className="font-medium">Return Options:</p>
                          <ul className="mt-2 space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                              </div>
                              <span>Free in-store return at any Nordstrom location</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                              </div>
                              <span>Free mail return (prepaid label available)</span>
                            </li>
                          </ul>
                        </div>
                        <p className="mt-3">
                          Would you like me to initiate the return process for you? I can generate a return label or
                          find the nearest store location.
                        </p>
                      </div>
                      <div className="bg-primary rounded-full p-3">
                        <Brain className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="similar" className="mt-6">
                <div className="bg-card rounded-lg shadow-lg p-6 border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-3 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-muted rounded-2xl p-4 max-w-[80%]">
                        <p>
                          I love this coffee table I saw at West Elm, but it's out of my budget. Can you find something
                          similar?
                        </p>
                        <img src="/placeholder.svg?height=150&width=200" alt="Coffee table" className="rounded mt-2" />
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="bg-primary/10 rounded-2xl p-4 max-w-[80%]">
                        <p>
                          I found several coffee tables with a similar mid-century modern design at lower price points:
                        </p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          <div className="bg-background rounded p-2">
                            <img
                              src="/placeholder.svg?height=80&width=80"
                              alt="Similar table 1"
                              className="rounded mb-2"
                            />
                            <p className="text-xs font-medium">IKEA STOCKHOLM</p>
                            <p className="text-xs text-muted-foreground">$199 (60% less)</p>
                          </div>
                          <div className="bg-background rounded p-2">
                            <img
                              src="/placeholder.svg?height=80&width=80"
                              alt="Similar table 2"
                              className="rounded mb-2"
                            />
                            <p className="text-xs font-medium">Target Midwood</p>
                            <p className="text-xs text-muted-foreground">$249 (50% less)</p>
                          </div>
                          <div className="bg-background rounded p-2">
                            <img
                              src="/placeholder.svg?height=80&width=80"
                              alt="Similar table 3"
                              className="rounded mb-2"
                            />
                            <p className="text-xs font-medium">Wayfair Retro</p>
                            <p className="text-xs text-muted-foreground">$279 (44% less)</p>
                          </div>
                        </div>
                        <p className="mt-3">
                          All of these have walnut finishes and similar dimensions. Would you like more details on any
                          of these options?
                        </p>
                      </div>
                      <div className="bg-primary rounded-full p-3">
                        <Brain className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials/Social Proof Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of shoppers who've transformed their online shopping experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "Shopgentic saved me hours of searching across different sites. Found exactly what I wanted at the best price.",
                  name: "Alex T.",
                  title: "Busy Professional",
                },
                {
                  quote:
                    "The price monitoring feature is incredible. Got notified about a flash sale and saved over $200 on my new laptop.",
                  name: "Jamie K.",
                  title: "Tech Enthusiast",
                },
                {
                  quote:
                    "I was skeptical about AI shopping, but Shopgentic really understands my style. The recommendations are spot-on.",
                  name: "Morgan L.",
                  title: "Fashion Blogger",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-card rounded-lg shadow p-6 border">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 text-primary">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="text-lg">
                            ★
                          </span>
                        ))}
                    </div>
                    <blockquote className="flex-1">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </blockquote>
                    <div className="mt-4 pt-4 border-t">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              {[
                { metric: "10,000+", label: "Active Users" },
                { metric: "500,000+", label: "Products Found" },
                { metric: "$2.5M+", label: "User Savings" },
                { metric: "4.8/5", label: "User Rating" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-primary">{stat.metric}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about Shopgentic</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does Shopgentic find products?",
                    answer:
                      "Shopgentic uses advanced AI to search across hundreds of retailers and marketplaces in real-time. Our technology understands natural language, allowing you to describe what you're looking for in your own words. We then filter and rank results based on your preferences, price, reviews, and availability.",
                  },
                  {
                    question: "Is my payment information secure?",
                    answer:
                      "Absolutely. Shopgentic uses bank-level encryption and never stores your full credit card details. We comply with PCI DSS standards and use tokenization for all transactions. Your security is our top priority.",
                  },
                  {
                    question: "How does Shopgentic learn my preferences?",
                    answer:
                      "Our AI analyzes your interactions, searches, and purchases to build a preference profile. The more you use Shopgentic, the better it understands your style, price sensitivity, and brand preferences. You can also explicitly tell the AI what you like or don't like to accelerate the learning process.",
                  },
                  {
                    question: "Can I use Shopgentic for any product category?",
                    answer:
                      "Yes! Shopgentic works across all major shopping categories including fashion, electronics, home goods, beauty products, and more. Our AI is trained on a wide range of products and can help you find virtually anything available for purchase online.",
                  },
                  {
                    question: "How does Shopgentic make money?",
                    answer:
                      "Shopgentic earns affiliate commissions from retailers when you make a purchase through our platform. This means our service is free for you to use, and we're incentivized to find you the best products at competitive prices. We never mark up prices or prioritize products based on our commission rates.",
                  },
                  {
                    question: "What makes Shopgentic different from regular search?",
                    answer:
                      "Unlike traditional search engines, Shopgentic understands context, remembers your preferences, and can have a natural conversation about products. We also consolidate information from multiple sources, compare options, track prices, and manage your entire shopping journey from search to delivery in one place.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to transform your shopping experience?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80 text-lg">
              Join thousands of smart shoppers who save time, money, and frustration with Shopgentic.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat">
                <Button size="lg" variant="secondary" className="gap-2">
                  Try It Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="px-4 py-3 rounded-l-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button className="absolute right-0 top-0 h-full rounded-l-none" variant="secondary">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Shopgentic</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Shopgentic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

