'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import confetti from 'canvas-confetti'

interface BetaSignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function BetaSignupModal({ open, onOpenChange }: BetaSignupModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Simulating a successful form submission
      setTimeout(() => {
        setSuccess(true)

        // Trigger confetti on successful submission
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }, 1000)
    } catch (err: any) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Join Our Beta</DialogTitle>
          <DialogDescription>
            Sign up now to get early access to our product!
          </DialogDescription>
        </DialogHeader>

        {success ? (
          // Success Screen
          <div className="text-center p-6">
            <h2 className="text-xl font-semibold text-green-600">You're In!</h2>
            <p className="text-sm text-gray-500 mt-2">Thank you for signing up for our Beta. We'll be in touch soon!</p>
          </div>
        ) : (
          // Beta Signup Form
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="business">Business Name</Label>
              <Input
                id="business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Enter your business name"
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={loading} className="w-full mt-6">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing Up...
                </>
              ) : (
                "Join Beta"
              )}
            </Button>
          </form>
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}
      </DialogContent>
    </Dialog>
  )
}
