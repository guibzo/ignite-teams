import {
	LucideChevronLeft,
	LucideIcon,
	LucidePlus,
	LucideSearchX,
	LucideUser,
	LucideUsers,
	LucideX,
} from 'lucide-react-native'
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
interopIcon(LucideUser)
interopIcon(LucideX)
interopIcon(LucideSearchX)
interopIcon(LucidePlus)

export { LucideChevronLeft, LucidePlus, LucideSearchX, LucideUser, LucideUsers, LucideX }
