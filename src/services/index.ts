import openai from '../utils/openia'

export const generateImage = async (prompt: string) => {
  try {
    const {data} = await openai.createImage({
      prompt,
      n: 6,
      size: "1024x1024"
    })
    return data.data
  } catch (error) {
    console.error(error)
  }
}