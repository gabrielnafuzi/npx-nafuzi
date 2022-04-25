#!/usr/bin/env node
import open from 'open'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import { createSpinner } from 'nanospinner'
import figlet from 'figlet'

const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

console.clear()

figlet('Hello!', async (err, data) => {
  console.log(gradient.pastel.multiline(data) + '\n')

  const rainbowText = chalkAnimation.rainbow('My name is Gabriel 🤗 \n', 0.5)

  await sleep()

  rainbowText.stop()

  const spinner = createSpinner(
    "and within 3 seconds you'll be redirect to my github 🚀  \n"
  ).start()

  await sleep(3000)

  spinner.success({ text: 'Thank you, and have a good trip! 👋 \n' })

  await sleep(800)

  await open('https://www.github.com/gabrielnafuzi')

  process.exit(1)
})
