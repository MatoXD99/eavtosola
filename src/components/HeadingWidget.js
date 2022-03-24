import React from 'react'

function HeadingWidget(props) {
  return (
    <div className="sm:flex-auto pt-16 pb-8">
      <h1 className="text-xl font-semibold text-gray-900">{props.title}</h1>
      <p className="mt-2 text-sm text-gray-700">
        {props.description}
      </p>
    </div>
  )
}

export default HeadingWidget