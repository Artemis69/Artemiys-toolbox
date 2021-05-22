import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'

export default function (): Component {
  const [text, setText] = createSignal('')
  const [count, setCount] = createSignal(0)
  const [output, setOutput] = createSignal('')
  const [copyButtonContent, setCopyButtonContent] = createSignal('Copy!')

  return (
    <>
      <div class={`${styles.text} ${styles.responsive_container}`}>
        <label for="repeat">Repeat</label>
        <input
          type="text"
          id="repeat"
          name="repeat"
          placeholder="it"
          class={styles.input}
          onInput={e => setText(e.target.value)}
          spellcheck="false"
        />
        <input
          type="number"
          id="times"
          name="times"
          placeholder="so many"
          class={styles.input}
          onInput={e => setCount(e.target.valueAsNumber)}
          min="1"
          max="5368708"
        />
        <label for="times">times</label>
      </div>
      <div class={styles.responsive_container}>
        <button
          type="button"
          class={styles.button}
          onClick={() =>
            count() <= 5368708
              ? setOutput(text().repeat(count()))
              : alert('The number of reps is too high')
          }
        >
          Repeat!
        </button>
        <button
          type="button"
          class={styles.button + ' ' + styles.copy_btn}
          onClick={() => {
            navigator.clipboard.writeText(output()).then(() => {
              setCopyButtonContent('Copied!')
              const timeout = setTimeout(() => {
                setCopyButtonContent('Copy!')
                clearTimeout(timeout)
              }, 750)
            })
          }}
        >
          {copyButtonContent()}
        </button>
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
