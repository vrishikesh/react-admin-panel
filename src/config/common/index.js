import envalid from 'envalid'
const { str, url } = envalid

const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({choices: ['development', 'production', 'test', 'provision']}),
  REACT_APP_NAME: str(),
  REACT_APP_API_LINK: url(),
  REACT_APP_TZ: str({default: 'UTC'}),
  REACT_APP_LANGUAGES: str({default: "en,ar,fr,es,ur,nor,hin"}),
  REACT_APP_DEFAULT_LANGUAGE: str({default: "en"})
})

export default env
