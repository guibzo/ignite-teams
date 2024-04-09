import { LucideChevronLeft, LucideIcon, LucideSearchX, LucideUsers } from 'lucide-react-native'
import { cssInterop } from 'nativewind'

function interopIcon(icon: LucideIcon) {
	cssInterop(icon, {
		className: {
			target: 'style',
			nativeStyleToProp: {
				color: true,
				opacity: true,
			},
		},
	})
}

interopIcon(LucideChevronLeft)
interopIcon(LucideUsers)
interopIcon(LucideSearchX)

export { LucideChevronLeft, LucideSearchX, LucideUsers }
