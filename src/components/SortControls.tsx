import { Select, Space } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { ERatingKey, ESortOrder } from '../features/movies/types/types'
import { SPACES } from '../styles/spaces'
import { COLORS } from '../styles/colors'

interface IProps {
	ratingKey: ERatingKey
	order: ESortOrder
	setRatingKey: (value: React.SetStateAction<ERatingKey>) => void
	setOrder: (value: React.SetStateAction<ESortOrder>) => void
}

const SortControls: React.FC<IProps> = ({ ratingKey, order, setRatingKey, setOrder }) => {
	return (
		<Controls>
			<Space size="middle">
				<StyledSelect
					value={ratingKey}
					onChange={(v) => setRatingKey(v as ERatingKey)}
					style={{ width: 140 }}
				>
					<Select.Option value={ERatingKey.Imdb}>IMDB Rating</Select.Option>
					<Select.Option value={ERatingKey.Popularity}>Popularity</Select.Option>
				</StyledSelect>
				<StyledSelect
					value={order}
					onChange={(v) => setOrder(v as ESortOrder)}
					style={{ width: 140 }}
				>
					<Select.Option value={ESortOrder.Desc}>Descending</Select.Option>
					<Select.Option value={ESortOrder.Asc}>Ascending</Select.Option>
				</StyledSelect>
			</Space>
		</Controls>
	)
}

const Controls = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: ${SPACES.MEDIUM} ${SPACES.EXTRA_LARGE};
`

const StyledSelect = styled(Select)`
	.ant-select-selector {
		background: transparent !important;
		border: 1px solid rgba(255, 255, 255, 0.6) !important;
		color: ${COLORS.WHITE};
		display: flex;
		align-items: center;
	}

	.ant-select-selection-item {
		color: ${COLORS.WHITE} !important;
	}

	.ant-select-arrow {
		color: ${COLORS.WHITE};
	}
`

export default SortControls
