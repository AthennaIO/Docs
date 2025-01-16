import React from "react";
import styles from './path.module.css'

export default function Path(props: { father: string; child: string }) {
  let father = props.father

  switch (props.father) {
    case 'resources':
      father = 'src/resources'
      break
    case 'storage':
      father = 'src/storage'
      break
    case 'logs':
      father = 'src/storage/logs'
      break
    case 'views':
      father = 'src/resources/views'
      break
    case 'locales':
      father = 'src/resources/locales'
      break
    case 'static':
      father = 'src/resources/static'
      break
    case 'config':
      father = 'src/config' 
      break
    case 'database':
      father = 'src/database' 
      break
    case 'seeders':
      father = 'src/database/seeders' 
      break
    case 'migrations':
      father = 'src/database/migrations' 
      break
    case 'console':
      father = 'src/console' 
      break
    case 'commands':
      father = 'src/console/commands' 
      break
    case 'cron':
      father = 'src/cron' 
      break
    case 'schedulers':
      father = 'src/cron/schedulers' 
      break
    case 'models':
      father = 'src/models'
      break
    case 'services':
      father = 'src/services'
      break
    case 'repositories':
      father = 'src/repositories'
      break
    case 'http':
      father = 'src/http' 
      break 
    case 'controllers':
      father = 'src/http/controllers'
      break
    case 'middlewares':
      father = 'src/http/middlewares'
      break
    case 'interceptors':
      father = 'src/http/interceptors'
      break
    case 'terminators':
      father = 'src/http/terminators'
      break
    case 'stubs':
      father = 'tests/stubs'
      break
    case 'fixtures':
      father = 'tests/fixtures'
      break
    case 'providers':
      father = 'src/providers'
      break
    case 'facades':
      father = 'src/facades'
      break
    case 'routes':
      father = 'src/routes'
      break
    case 'validators':
      father = 'src/validators'
      break
  }

  return (
    <div className={styles.hoverCardContainer}>
      <a className={styles.hoverCardLink} href={`/docs/the-basics/helpers#path${props.father}`}>
        <code>Path.{props.father}({props.child ? `'${props.child}'` : ''})</code>
      </a>
      <div className={styles.hoverCard}>
        <p style={{ margin: 0 }}>./{father}{props.child ? `/${props.child}` : ''}</p>
      </div>
    </div>
  )
}
