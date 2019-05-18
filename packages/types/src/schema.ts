import { Validator, RuleDescription, DefaultPatternRule } from './rule'
import { Dispatcher } from './effects'


export type Schema = {
  type?: string
  title?: string
  description?: string
  default?: unknown
  required?: boolean
  enum?: Array<{ label: string, value: unknown } | string | number>
  properties?: {
    [key: string]: Schema
  }
  items?: Schema
  minItems?: number
  maxItems?: number
  ['x-props']: object
  ['x-index']: number
  ['x-rules']: Validator | Array<Validator | RuleDescription | DefaultPatternRule> | DefaultPatternRule | RuleDescription
  ['x-component']: string
  ['x-effect']: (dispatch: Dispatcher) => { [key: string]: any }
}