import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'sandstone-genie',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 71,
  namespace: 'genie',
  packUid: 'uTLGIetY',
  saveOptions: { path: './.sandstone/output/datapack' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
