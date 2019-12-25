import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  .p-footer{
    padding: 10px;
      font-size: 14px;
      text-align: center;
      a {
          display: inline-block;
          height: 20px;
          color: #000;
          img{
            margin-right: 10px;
            vertical-align: text-bottom;
          }
      }
  }
`