import dayjs, { Dayjs } from 'dayjs'

export const dateFormat = (date: string | Dayjs | null): string | null => {
	if (!date) {
		return null
	}

	return dayjs(date).format('DD.MM.YYYY.') as string
}
