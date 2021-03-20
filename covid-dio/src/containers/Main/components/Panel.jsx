import React, {memo} from 'react'
import RefreshIcon from '../../../assets/img/covid.jpg'
import { Card, Typography, Button, Select, MenuItem} from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatiorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata}){
    const { cases, recovered, deaths, todayCases, todayDeaths } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`}/>
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País ${country} - recuperados: ${recovered}` 

    const copyInfo = ()=>{
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo= () => {
        navigator.share({
            title: `Dados do COVID 19 - ${country}`,
            text: textCovid19,
            //url: 'https://covid19.netlify.app'
        })

    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="black" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="container" color="black" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <div>
                        <Typography variant="h5" component="span" color="black">COVID 19 </Typography>
                    </div>
                        <Typography variant="h6" component="span" color="black">PAINEL CORONA </Typography>
                    <div>
                        <Typography variant="body2" component="span" color="black">Atualizado em: {updateAt}</Typography>
                    </div>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatiorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}
export default memo(Panel)