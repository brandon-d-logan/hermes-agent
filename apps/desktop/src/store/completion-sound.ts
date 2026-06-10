import { atom } from 'nanostores'

// Custom (WAV file) variant gets a high ID so it doesn't collide with presets.
export const CUSTOM_SOUND_VARIANT_ID = 99

export const DEFAULT_COMPLETION_SOUND_VARIANT_ID = 1

export const $completionSoundVariantId = atom<number>(DEFAULT_COMPLETION_SOUND_VARIANT_ID)

export function setCompletionSoundVariantId(id: number) {
  $completionSoundVariantId.set(id)
}
