import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Section } from "src/styles/components";
import { Container, Row, Col } from "reactstrap";
import Components from "src/components"
import { home } from "store/actions"

const Categories = () => {
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  
  // get home data 
  const { home_data, isLoading } = useSelector(state => state.home)
  useEffect(() => {
    let lang = {
      code: langStore?.code
    }
    dispatch(home.getHome(lang))
  }, [dispatch, langStore?.code])

  return (  
    <Section>
      <Container>
        <Row>
          <>
            {
              home_data?.length > 0 &&
              home_data?.map((x, i) =>
                <React.Fragment key={i}>
                  {
                    x?.list_type == 4 &&
                    x?.data?.map((data, key) => 
                      <Components.CategoryCard data={data} class={'no-slider'} loading={isLoading} key={key} />
                    )
                  }
                </React.Fragment>
              )
            }
          </>          
        </Row>
      </Container>
    </Section>
  );
}
 
export default Categories;