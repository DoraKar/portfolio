import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({className, title, name, icon}) => {
    return (
        <div className={className} name={name}>
            {icon}
            <h2 className='header-title'>&nbsp;{title}</h2>
        </div>
    )
}

export default styled(SectionTitle)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom:24px;
    justify-content:center;
    

    .header_title {
    margin-bottom:0;
    margin-left:10px;     
    }

    .header-title h2 {
        color:whitesmoke
    }

`