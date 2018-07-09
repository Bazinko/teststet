import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardContent
} from 'material-ui'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

class GCFP extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      cfs:
      [
        {
          cfName: 'helloWorld'
        }
      ],
      result: ''
    }
    this.callFunc = this.callFunc.bind(this)
  }

  callFunc(name)
  {
    const { gcfR } = this.props
    gcfR(name)
  }

  render () {
    const { classes, result } = this.props
    const { cfs } = this.state
    return (
      <form noValidate autoComplete='off'>
        <Card>
          <CardHeader title='Call GCF' />
          <CardContent>
            <Grid container spacing={16}>
              {
                cfs.map(cf => {
                  return <Grid item xs={12}>
                <Button
                  onClick={() => this.callFunc(cf.cfName)}>{cf.cfName}</Button>
                </Grid>
                })
              }
            </Grid>
          </CardContent>
          <div dangerouslySetInnerHTML={{__html:result}}></div>
        </Card>
      </form>
    )
  }
}

export default GCFP