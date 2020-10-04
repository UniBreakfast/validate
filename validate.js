export default function validate(values, requirements) {
  return requirements.filter(req => {
    if (req.is || req.has) {
      const rule = req.is || rule.has
      return !rule.test(values[req.field])
    } else if (req.not || req.hasNo || req.isNot) {
      const rule = req.not || req.hasNo || req.isNot
      return rule.test(values[req.field])
    }
  }).map(({field, issue}) => ({field, issue}))
}
