"use client"

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 p-2 rounded hover:bg-gray-700 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>
      <pre className="bg-[#0f1729] p-4 rounded-lg overflow-x-auto">
        <code className="text-gray-300 text-sm">{code}</code>
      </pre>
    </div>
  )
}

