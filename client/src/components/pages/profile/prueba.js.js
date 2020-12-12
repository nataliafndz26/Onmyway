<Tabs defaultActiveKey="alljobs" id="noanim-tab-example" style={{ marginTop: '50px' }}>
    {this.props.loggedInUser.role === 'HOST'
        ?
        <Tab eventKey="alljobs" title="All jobs">
            <Row>
                {this.state.jobs.map(elm => {
                    return (
                        <Col lg={4}>
                            <JobCard key={elm._id} {...elm} deleteJob={() => this.deleteJob(elm._id)} setTheUser={this.setTheUser} loggedInUser={this.props.loggedInUser} />
                        </Col>
                    )
                })
                }
            </Row>
        </Tab>
        :
        null}
    <Tab eventKey="filteredjobs" title="Jobs for you">
        <Row>
            {this.state.filteredjobs.map(elm => {
                return (
                    <Col lg={4} >
                        <JobCard key={elm.id} {...elm} setTheUser={this.setTheUser} loggedInUser={this.props.loggedInUser} />
                    </Col>
                )
            })
            }
        </Row>
    </Tab>
</Tabs>