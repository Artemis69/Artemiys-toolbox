import type { Component } from 'solid-js'
import { Link } from 'solid-app-router'
import * as styles from '../../styles/shared'

interface ISchema {
  name: string
  description: string
}

const schemes: ISchema[] = [
  {
    name: 'mosmetro',
    description: 'Moscow Metro map transliteration schema',
  },
  {
    name: 'wikipedia',
    description: 'Wikipedia transliteration schema',
  },
  {
    name: 'yandex_maps',
    description: 'Yandex.Maps transliteration schema',
  },
  {
    name: 'yandex_money',
    description: 'Yandex.Money transliteration schema',
  },
  {
    name: 'telegram',
    description: 'Telegram transliteration schema',
  },
  {
    name: 'scientific',
    description: 'Scientific transliteration schema',
  },
  {
    name: 'gost_7034',
    description: 'GOST R 7.0.34-2014 transliteration schema',
  },
  {
    name: 'bs_2979',
    description: 'British Standard 2979:1958 transliteration schema',
  },
  {
    name: 'bs_2979_alt',
    description: 'British Standard 2979:1958 transliteration schema',
  },
  {
    name: 'gost_779',
    description: 'GOST 7.79-2000 (aka ISO 9:1995) transliteration schema',
  },
  {
    name: 'gost_779_alt',
    description: 'GOST 7.79-2000 (aka ISO 9:1995) transliteration schema',
  },
  {
    name: 'bgn_pcgn',
    description: 'BGN/PCGN transliteration schema',
  },
  {
    name: 'bgn_pcgn_alt',
    description: 'BGN/PCGN transliteration schema',
  },
  {
    name: 'gost_16876',
    description: 'GOST 16876-71 (aka GOST 1983) transliteration schema',
  },
  {
    name: 'gost_16876_alt',
    description: 'GOST 16876-71 (aka GOST 1983) transliteration schema',
  },
  {
    name: 'gost_52290',
    description: 'GOST R 52290-2004 transliteration schema',
  },
  {
    name: 'gost_52535',
    description: 'GOST R 52535.1-2006 transliteration schema',
  },
  {
    name: 'icao_doc_9303',
    description: 'ICAO DOC 9303 transliteration schema',
  },
  {
    name: 'iso_9_1954',
    description: 'ISO/R 9:1954 transliteration schema',
  },
  {
    name: 'iso_9_1968',
    description: 'ISO/R 9:1968 transliteration schema',
  },
  {
    name: 'iso_9_1968_alt',
    description: 'ISO/R 9:1968 transliteration schema',
  },
  {
    name: 'mvd_310',
    description: 'MVD 310-1997 transliteration schema',
  },
  {
    name: 'mvd_310_fr',
    description: 'MVD 310-1997 transliteration schema',
  },
  {
    name: 'mvd_782',
    description: 'MVD 782-2000 transliteration schema',
  },
  {
    name: 'ungegn_1987',
    description: 'UNGEGN 1987 V/18 transliteration schema',
  },
  {
    name: 'ala_lc',
    description: 'ALA-LC transliteration schema',
  },
  {
    name: 'ala_lc_alt',
    description: 'ALA-LC transliteration schema',
  },
] as const

export default function (): Component {
  return (
    <>
      <h1 class={styles.big_text}>Iuliia</h1>
      <p class={styles.text}>Select transliteration standard</p>
      <div class={styles.main}>
        {schemes.map(scheme => (
          <Link href={`/iuliia/${scheme.name}`} class={styles.card}>
            <div class={styles.card__container}>
              <h3>{scheme.name}</h3>
              <p>{scheme.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
