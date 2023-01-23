import React, { useState, FormEvent } from 'react'
import { ImagesResponseDataInner } from 'openai'

import { generateImage } from './services'
import Button from './components/button'
import Input from './components/input'
import './App.css'

const App = () => {
  const [prompt, setPromt] = useState<string>('')
  const [images, setImages] = useState<ImagesResponseDataInner[] | undefined>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setPromt(event.currentTarget.value)
  }

  const handleGenerateImage = async () => {
    if (!prompt) {
      alert('Please, type something to generate an image')
      return
    }
    setIsLoading(true)
    const urlsData = await generateImage(prompt)
    setImages(urlsData)
    setIsLoading(false)
  }

  return (
    <div className='app-container'>
      <h1>Generate an Image using Open AI API</h1>
      <div className='actions'>
        <Input
          placeholder='Type something to Generate an Image'
          onChange={handleInputChange}
        />
        <Button
          isLoading={isLoading}
          isDisabled={isLoading}
          onClick={handleGenerateImage}
        >
          Generate an Image
        </Button>
      </div>
      <div className='images'>
        {!!images?.length && images.map(image => (<img alt='ai generate image' src={image.url} />))}
      </div>
    </div>
  )
}

export default App