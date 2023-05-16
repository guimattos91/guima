import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { FooterDiv, LinkStyled, SectionStyled } from './style'

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs={12}>
            <SectionStyled>
              <p className="d-flex align-items-center">
                Site criado por: &nbsp;
                <nav>
                  <LinkStyled href="https://www.linkedin.com/in/guimattos91/">
                    Guilherme Mattos
                  </LinkStyled>
                </nav>
              </p>
            </SectionStyled>
          </Col>
        </Row>
      </Container>
    </FooterDiv>
  )
}

export default memo(Footer)
