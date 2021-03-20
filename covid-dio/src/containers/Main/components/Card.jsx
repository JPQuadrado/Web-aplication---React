import React, { memo } from 'react'
import ProtoTypes from 'prop-types'
import { Card as CardUI} from '../../../components'
import{
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card({value, label, color}){
    return(
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <ValueStyled>{label}</ValueStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)