import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, createState, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Remove from site')

  const [id, setId] = createSignal('')
  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')

  const getData = async () => {
    if (id() === '') return

    try {
      const res = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/delete',
        {
          method: 'POST',
          body: JSON.stringify({ userid: id().trim() }),
        }
      )

      const data: { error?: string; userid?: string } = await res.json()

      if (data.error) {
        setResult('')
        setErr(data.error || t(['cheap sluts', 'Unexpected Error']))
        return
      }

      setErr('')
      setResult(data.userid)
    } catch (_) {
      setErr(t(['cheap sluts', 'Unexpected Error']))
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.big_text)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div style={{ display: 'flex', 'flex-direction': 'column' }}>
        <Input.Label for="id">
          {t(['cheap sluts', 'remove', 'id'])}
        </Input.Label>
        <Input.default
          id="id"
          type="text"
          placeholder={t(['cheap sluts', 'remove', 'id'])}
          onInput={e => setId((e.target as HTMLInputElement).value)}
        />
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <Show when={result() !== ''}>
        <p class={styles.text}>{t(['cheap sluts', 'remove', 'Removed Successfully'])}!</p>
      </Show>
      <Show when={err() !== ''}>
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {err()}
        </p>
      </Show>
    </>
  )
}
