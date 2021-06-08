import type { Component } from 'solid-js'
import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import CopyBtn from '../components/ButtonCopy'

export default function (): Component {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to swagify"
        aria-placeholder="Enter the text to swagify"
        onInput={e => setText(e.target.value)}
      />
      <div class={styles.responsive_container}>
        <button
          type="button"
          class={styles.button}
          onClick={() => setOutput(swagify(text()))}
        >
          Swagify!
        </button>
        <CopyBtn copy={output()} />
      </div>
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder="Result will be here"
        aria-placeholder="Result will be here"
      />
    </>
  )
}
