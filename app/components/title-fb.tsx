import React from 'react'

export default function TitleFB({ className }: { className?: string}) {
  return (
    <h1 className={`text-blue-600 font-bold ${ className ? className : "text-6xl" }`}>facebook</h1>
  )
}
