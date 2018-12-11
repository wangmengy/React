import styled from 'styled-components'

const Loadwrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    div{
        font-size:0;
        padding-bottom:100%;
        width:100%;
        position:relative;
        img{
            position:absolute;
            width:100%;
            height:100%;
        }
        span{
            position:absolute;
            bottom: .05rem;
            left:50%;
            margin-left:-.22rem;
            font-size:.16rem;
            color:#77bc1f;
        }
    }
    

`


export default Loadwrap