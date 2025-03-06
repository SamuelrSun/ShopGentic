"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Send, Plus, Settings, History, ChevronLeft, Menu, X, Brain, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

// Sample conversation data
const initialMessages = [
  {
    role: "assistant",
    content: "Hi there! I'm your Shopgentic AI shopping assistant. How can I help you today?",
  },
]

// Sample suggestions
const suggestions = [
  "Find me running shoes under $100",
  "I need a gift for my mom's birthday",
  "Compare prices for Sony WH-1000XM5 headphones",
  "Track my recent order from Amazon",
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (input.trim() === "") return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Clear input
    setInput("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      let response

      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes("shoe") || input.toLowerCase().includes("sneaker")) {
        response = {
          role: "assistant",
          content: "I found several shoes that might interest you. Here are some options based on your preferences:",
          products: [
            {
              name: "Nike Air Zoom Pegasus",
              price: "$120",
              image: "/placeholder.svg?height=100&width=100",
              rating: "4.7/5",
            },
            {
              name: "Adidas Ultraboost",
              price: "$180",
              image: "/placeholder.svg?height=100&width=100",
              rating: "4.8/5",
            },
            {
              name: "New Balance 990v5",
              price: "$185",
              image: "/placeholder.svg?height=100&width=100",
              rating: "4.6/5",
            },
          ],
        }
      } else if (input.toLowerCase().includes("headphone") || input.toLowerCase().includes("sony")) {
        response = {
          role: "assistant",
          content: "I found the Sony WH-1000XM5 headphones at several retailers. Here's a price comparison:",
          comparison: [
            { retailer: "Amazon", price: "$348", delivery: "Free 2-day shipping" },
            { retailer: "Best Buy", price: "$349", delivery: "Free next-day pickup" },
            { retailer: "Sony Direct", price: "$399", delivery: "Free shipping" },
          ],
        }
      } else if (input.toLowerCase().includes("track") || input.toLowerCase().includes("order")) {
        response = {
          role: "assistant",
          content: "I found your recent order:",
          order: {
            items: ['Samsung 55" QLED TV'],
            status: "In transit",
            eta: "Arriving tomorrow by 8pm",
            carrier: "FedEx",
            trackingNumber: "FX123456789",
          },
        }
      } else {
        response = {
          role: "assistant",
          content:
            "I'd be happy to help you with that. Could you provide more details about what you're looking for? For example, any specific brands, price range, or features that are important to you?",
        }
      }

      setMessages((prev) => [...prev, response])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setMessages([...messages, { role: "user", content: suggestion }])

    // Simulate AI response after a short delay
    setTimeout(() => {
      const response = {
        role: "assistant",
        content:
          "I'm searching for options based on your request. Give me a moment to find the best matches for you...",
      }

      setMessages((prev) => [...prev, response])

      // Simulate a more detailed response after another delay
      setTimeout(() => {
        let detailedResponse

        if (suggestion.includes("running shoes")) {
          detailedResponse = {
            role: "assistant",
            content: "Here are some great running shoes under $100:",
            products: [
              {
                name: "Nike Revolution 6",
                price: "$65",
                image: "/placeholder.svg?height=100&width=100",
                rating: "4.5/5",
              },
              {
                name: "Adidas Runfalcon 2.0",
                price: "$85",
                image: "/placeholder.svg?height=100&width=100",
                rating: "4.3/5",
              },
              {
                name: "New Balance Fresh Foam Arishi",
                price: "$75",
                image: "/placeholder.svg?height=100&width=100",
                rating: "4.4/5",
              },
            ],
          }
        } else if (suggestion.includes("gift")) {
          detailedResponse = {
            role: "assistant",
            content: "Here are some thoughtful gift ideas for your mom's birthday:",
            products: [
              {
                name: "Personalized Photo Frame",
                price: "$45",
                image: "/placeholder.svg?height=100&width=100",
                rating: "4.8/5",
              },
              {
                name: "Spa Gift Basket",
                price: "$65",
                image: "/placeholder.svg?height=100&width=100",
                rating: "4.7/5",
              },
              {
                name: "Kindle Paperwhite",
                price: "$139",
                image: "/placeholder.svg?height=100&width=100",
                rating: "4.9/5",
              },
            ],
          }
        } else if (suggestion.includes("headphones")) {
          detailedResponse = {
            role: "assistant",
            content: "I found the Sony WH-1000XM5 headphones at several retailers. Here's a price comparison:",
            comparison: [
              { retailer: "Amazon", price: "$348", delivery: "Free 2-day shipping" },
              { retailer: "Best Buy", price: "$349", delivery: "Free next-day pickup" },
              { retailer: "Sony Direct", price: "$399", delivery: "Free shipping" },
            ],
          }
        } else if (suggestion.includes("track")) {
          detailedResponse = {
            role: "assistant",
            content: "I found your recent Amazon order:",
            order: {
              items: ["Echo Dot (5th Gen)"],
              status: "Delivered",
              deliveredDate: "Yesterday at 3:45 PM",
              location: "Front porch",
            },
          }
        }

        setMessages((prev) => [...prev.slice(0, -1), detailedResponse])
      }, 2000)
    }, 1000)

    setInput("")
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)} className="rounded-full">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:w-80 lg:w-96 bg-background border-r`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Shopgentic</span>
            </Link>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="md:hidden rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </div>
          <Separator />
          <div className="flex-1 overflow-auto p-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">Recent Chats</div>
            <div className="space-y-2">
              {[
                "Summer wardrobe ideas",
                "Birthday gift for dad",
                "Living room furniture",
                "Wireless earbuds comparison",
              ].map((chat, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start gap-2 text-left h-auto py-3">
                  <History className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{chat}</span>
                </Button>
              ))}
            </div>
          </div>
          <Separator />
          <div className="p-4">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <div className="mt-4 text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} Shopgentic
            </div>
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <span className="font-medium">Shopping Assistant</span>
          </div>
          <ModeToggle />
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 md:py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "user" ? "bg-primary" : "bg-primary/10"}`}
                  >
                    {message.role === "user" ? (
                      <MessageSquare className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <Brain className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-4 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    <p>{message.content}</p>

                    {/* Product display */}
                    {message.products && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {message.products.map((product, i) => (
                          <div key={i} className="bg-background rounded-md p-3 shadow-sm">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-24 object-contain mb-2"
                            />
                            <p className="font-medium text-sm">{product.name}</p>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-sm font-bold">{product.price}</span>
                              <span className="text-xs text-muted-foreground">{product.rating}</span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full mt-2 text-xs h-8">
                              View Details
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Price comparison */}
                    {message.comparison && (
                      <div className="mt-4 bg-background rounded-md overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="text-left p-2">Retailer</th>
                              <th className="text-left p-2">Price</th>
                              <th className="text-left p-2">Delivery</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {message.comparison.map((item, i) => (
                              <tr key={i} className="border-t">
                                <td className="p-2 font-medium">{item.retailer}</td>
                                <td className="p-2">{item.price}</td>
                                <td className="p-2 text-xs text-muted-foreground">{item.delivery}</td>
                                <td className="p-2">
                                  <Button variant="outline" size="sm" className="text-xs h-7">
                                    Buy
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Order tracking */}
                    {message.order && (
                      <div className="mt-4 bg-background rounded-md p-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-muted-foreground">Items</p>
                            <p className="font-medium">{message.order.items.join(", ")}</p>
                          </div>
                          {message.order.status && (
                            <div>
                              <p className="text-xs text-muted-foreground">Status</p>
                              <p className="font-medium">{message.order.status}</p>
                            </div>
                          )}
                          {message.order.eta && (
                            <div>
                              <p className="text-xs text-muted-foreground">Estimated Delivery</p>
                              <p className="font-medium">{message.order.eta}</p>
                            </div>
                          )}
                          {message.order.deliveredDate && (
                            <div>
                              <p className="text-xs text-muted-foreground">Delivered</p>
                              <p className="font-medium">{message.order.deliveredDate}</p>
                            </div>
                          )}
                          {message.order.carrier && (
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-xs text-muted-foreground">Carrier</p>
                                <p className="font-medium">{message.order.carrier}</p>
                              </div>
                              <Button variant="outline" size="sm">
                                Track Package
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && (
          <div className="px-4 py-3 border-t">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground mb-2">Try asking about:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs h-8"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-4 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What are you looking for today?"
                className="pr-12 py-6 text-base"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9"
                disabled={input.trim() === ""}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Shopgentic may display inaccurate info. Verify details before purchasing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

