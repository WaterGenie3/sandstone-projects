import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'sandstone-genie',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 7,
  namespace: 'sandstone-genie',
  packUid: 'uTLGIetY',
  saveOptions: { path: './.sandstone/output/datapack' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
