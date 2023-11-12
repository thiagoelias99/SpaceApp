import styled from 'styled-components'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from './components/global-styles'
import Header from './components/header'
import SideBar from './components/side-bar'
import Body from './components/body'
import ModalZoom from './components/ModalZoom'
import DebugObserver from './components/debug-observer'

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  `

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
  `

function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <GradientBackground>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <MainContainer>
            <SideBar />
            <Body />
          </MainContainer>
        </AppContainer>
        <ModalZoom />
      </GradientBackground>
    </RecoilRoot>
  )
}

export default App
