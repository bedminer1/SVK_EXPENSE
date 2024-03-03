
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #5F6F52 
		"--color-primary-50": "231 233 229", // #e7e9e5
		"--color-primary-100": "223 226 220", // #dfe2dc
		"--color-primary-200": "215 219 212", // #d7dbd4
		"--color-primary-300": "191 197 186", // #bfc5ba
		"--color-primary-400": "143 154 134", // #8f9a86
		"--color-primary-500": "95 111 82", // #5F6F52
		"--color-primary-600": "86 100 74", // #56644a
		"--color-primary-700": "71 83 62", // #47533e
		"--color-primary-800": "57 67 49", // #394331
		"--color-primary-900": "47 54 40", // #2f3628
		// secondary | #B99470 
		"--color-secondary-50": "245 239 234", // #f5efea
		"--color-secondary-100": "241 234 226", // #f1eae2
		"--color-secondary-200": "238 228 219", // #eee4db
		"--color-secondary-300": "227 212 198", // #e3d4c6
		"--color-secondary-400": "206 180 155", // #ceb49b
		"--color-secondary-500": "185 148 112", // #B99470
		"--color-secondary-600": "167 133 101", // #a78565
		"--color-secondary-700": "139 111 84", // #8b6f54
		"--color-secondary-800": "111 89 67", // #6f5943
		"--color-secondary-900": "91 73 55", // #5b4937
		// tertiary | #547113 
		"--color-tertiary-50": "229 234 220", // #e5eadc
		"--color-tertiary-100": "221 227 208", // #dde3d0
		"--color-tertiary-200": "212 220 196", // #d4dcc4
		"--color-tertiary-300": "187 198 161", // #bbc6a1
		"--color-tertiary-400": "135 156 90", // #879c5a
		"--color-tertiary-500": "84 113 19", // #547113
		"--color-tertiary-600": "76 102 17", // #4c6611
		"--color-tertiary-700": "63 85 14", // #3f550e
		"--color-tertiary-800": "50 68 11", // #32440b
		"--color-tertiary-900": "41 55 9", // #293709
		// success | #b6ee3c 
		"--color-success-50": "244 252 226", // #f4fce2
		"--color-success-100": "240 252 216", // #f0fcd8
		"--color-success-200": "237 251 206", // #edfbce
		"--color-success-300": "226 248 177", // #e2f8b1
		"--color-success-400": "204 243 119", // #ccf377
		"--color-success-500": "182 238 60", // #b6ee3c
		"--color-success-600": "164 214 54", // #a4d636
		"--color-success-700": "137 179 45", // #89b32d
		"--color-success-800": "109 143 36", // #6d8f24
		"--color-success-900": "89 117 29", // #59751d
		// warning | #dfe920 
		"--color-warning-50": "250 252 222", // #fafcde
		"--color-warning-100": "249 251 210", // #f9fbd2
		"--color-warning-200": "247 250 199", // #f7fac7
		"--color-warning-300": "242 246 166", // #f2f6a6
		"--color-warning-400": "233 240 99", // #e9f063
		"--color-warning-500": "223 233 32", // #dfe920
		"--color-warning-600": "201 210 29", // #c9d21d
		"--color-warning-700": "167 175 24", // #a7af18
		"--color-warning-800": "134 140 19", // #868c13
		"--color-warning-900": "109 114 16", // #6d7210
		// error | #980610 
		"--color-error-50": "240 218 219", // #f0dadb
		"--color-error-100": "234 205 207", // #eacdcf
		"--color-error-200": "229 193 195", // #e5c1c3
		"--color-error-300": "214 155 159", // #d69b9f
		"--color-error-400": "183 81 88", // #b75158
		"--color-error-500": "152 6 16", // #980610
		"--color-error-600": "137 5 14", // #89050e
		"--color-error-700": "114 5 12", // #72050c
		"--color-error-800": "91 4 10", // #5b040a
		"--color-error-900": "74 3 8", // #4a0308
		// surface | #222020 
		"--color-surface-50": "222 222 222", // #dedede
		"--color-surface-100": "211 210 210", // #d3d2d2
		"--color-surface-200": "200 199 199", // #c8c7c7
		"--color-surface-300": "167 166 166", // #a7a6a6
		"--color-surface-400": "100 99 99", // #646363
		"--color-surface-500": "34 32 32", // #222020
		"--color-surface-600": "31 29 29", // #1f1d1d
		"--color-surface-700": "26 24 24", // #1a1818
		"--color-surface-800": "20 19 19", // #141313
		"--color-surface-900": "17 16 16", // #111010
		
	}
}