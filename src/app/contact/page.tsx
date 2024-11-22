'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {


    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
    }
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
                    Get in Touch
                </h1>
                <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                    We&apos;d love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-purple-300">Send Us a Message</CardTitle>
                            <CardDescription className="text-gray-400">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <Input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full bg-gray-700 border-gray-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-gray-700 border-gray-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <Textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="w-full bg-gray-700 border-gray-600 text-white"
                                        rows={4}
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-purple-300">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="text-purple-400 mr-3" />
                                    <p className="text-gray-300">75760, Sector 9C, Saeedabad, Baldia Town, Karachi, Pakistan</p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="text-purple-400 mr-3" />
                                    <p className="text-gray-300">+92 3161097202</p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="text-purple-400 mr-3" />
                                    <p className="text-gray-300">huzaifa3108hassan@gmail.com</p>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}

