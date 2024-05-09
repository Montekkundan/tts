# Text-to-Speech with Profanity Check

This project uses OpenAI's text-to-speech model, specifically the `alloy` voice from the TTS-1-HD model, to generate audio files from text input. It includes a profanity check feature that uses an external API to ensure that no inappropriate language is spoken in the audio outputs.

## Installation

Before running this project, make sure you have Node.js installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

Once Node.js is installed, clone this repository and navigate to the project directory. Run the following command to install all necessary dependencies:

```bash
npm install
```

## Configuration
You need to set up the environment variable for OpenAI's API key. This can be done by creating a .env file in the root directory of the project and adding the following line:

`OPENAI_API_KEY=your_openai_api_key_here`

Replace your_openai_api_key_here with your actual OpenAI API key.

## Running the Application

To run the application, use the following command:

```bash
node main.js
```

## Output

The application generates two MP3 files:

- **`speech.mp3`**: This file is generated using the text "It's the final round! Are you nervous, oh that's a name I cannot say!" if the provided name contains profanity, as determined by the profanity check API.
- **`profanity.mp3`**: This file is an example demonstrating what the TTS would output if profanity checking was not applied. It contains the text "It's the final round! Are you nervous ${profanityName}?", where `${profanityName}` is the placeholder for the name that potentially contains profanity.

## Notes

This project uses the `alloy` voice because of its expressive quality, which enhances the audio output. The OpenAI Whisper model is utilized to process the text and convert it into speech.

## External API for Profanity Checking

The profanity check feature relies on the external API `https://vector.profanity.dev`. Ensure you have access to this API and understand its usage limits and requirements.
