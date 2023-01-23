import openai from '../utils/openia'

export const generateImage = async (prompt: string) => {
  try {
    console.log('env ', import.meta.env.OPENAI_API_KEY)
    const {data} = await openai.createImage({
      prompt,
      n: 6,
      size: "1024x1024"
    })
    console.log(data.data)
    return data.data
  } catch (error) {
    console.error(error)
  }
}