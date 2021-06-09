import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import { CopyBtn, Title } from '../components'

export default function () {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Title>Swagify</Title>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to swagify"
        aria-placeholder="Enter the text to swagify"
        onInput={e => setText((e.target as HTMLInputElement).value)}
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
        placeholder={t(['swagify', 'result'])}
        aria-placeholder={t(['swagify', 'result'])}
      />
    </>
  )
}
