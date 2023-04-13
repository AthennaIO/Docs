import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Admonition from '#components/Admonition'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, OrderedList, Paragraph, Table } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Configuration',
        description: 'Understand the initial configurations of your project.'
      }
    }
  }
}

export default class Configuration extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Environment configuration' },
    { title: 'Determining the current environment' },
    { title: 'Get an environment variable value' },
    { title: 'Configuration files' },
    { title: 'Manipulating configuration values' },
    { title: 'Define my own configuration path' },
    { title: 'Debug mode' },
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Environment configuration</Topic>

          <Paragraph align='justify'>
            It is often helpful to have different configuration values based on the environment where the 
            application is running. For example, you may wish to use a different storage driver locally than you 
            do on your production server.
          </Paragraph>

          <Paragraph align='justify'>
            To make this a cinch, Athenna utilizes the <CodeHighlight href='https://www.npmjs.com/package/dotenv'>dotenv</CodeHighlight> Node.js 
            library. In a fresh Athenna installation, the root directory of your application will contain 
            a <CodeHighlight>.env.example</CodeHighlight> file that defines many common environment variables. During 
            the Athenna installation process, this file will automatically be copied to <CodeHighlight>.env</CodeHighlight> and <CodeHighlight>.env.test</CodeHighlight>.
          </Paragraph>

          <Admonition type='note'>
            <Paragraph align='justify' size='sm'>
              If you are not using the Laravel project template you can simple create a <CodeHighlight>.env</CodeHighlight> file
              in the root path of your application and Athenna will automatically resolve it for you.
            </Paragraph>
          </Admonition>

          <Paragraph align='justify'>
            Athenna default <CodeHighlight>.env</CodeHighlight> file contains some common configuration values 
            that may differ based on whether your application is running locally or on a production. These values 
            are then retrieved from various Athenna configuration files within the <CodeHighlight>config</CodeHighlight> directory 
            using Athenna <CodeHighlight>Env</CodeHighlight> function.
          </Paragraph>

          <Paragraph align='justify'>
            If you are developing with a team, you may wish to continue including a <CodeHighlight>.env.example</CodeHighlight> file 
            with your application. By putting placeholder values in the example configuration file, other developers 
            on your team can clearly see which environment variables are needed to run your application.
          </Paragraph>

          <Admonition type='tip'>
            <Paragraph align='justify' size='sm'>
              Any variable in your <CodeHighlight>.env</CodeHighlight> file can be overridden by external environment
              variables such as server-level or system-level environment variables. But off course you can turn off t
              his behavior setting the <CodeHighlight>OVERRIDE_ENV=true</CodeHighlight> variable before running your
              application, if this variable is set to true, all environment variables set in <CodeHighlight>.env</CodeHighlight> will
              override the externals.
            </Paragraph>
          </Admonition>

          <Admonition type='caution'>
            <Paragraph align='justify' size='sm'>
              Your <CodeHighlight>.env</CodeHighlight> file should not be committed to your application source
              control, since each developer/server using your application could require a different environment
              configuration. Furthermore, this would be a security risk in the event an intruder gains access to
              your source control repository, since any sensitive credentials would get exposed.
            </Paragraph>
          </Admonition>
          
          <Box mt='md'>
            <Topic size='xl' pb='xs'>Determining the current environment</Topic>

            <Paragraph align='justify'>
              Before loading your application&apos;s environment variables, Athenna determines if either 
              the <CodeHighlight>NODE_ENV</CodeHighlight> environment variable has been externally provided or 
              if the <CodeHighlight>--env</CodeHighlight> Artisan argument has been specified. If so, Athenna 
              will attempt to load the <CodeHighlight>.env.${'{'}NODE_ENV{'}'}</CodeHighlight> file if it exists. 
              If it does not exist, Athenna will try to find the <CodeHighlight>NODE_ENV</CodeHighlight> value inside 
              of the <CodeHighlight>.env</CodeHighlight> file, if it exists, Athenna will save it&apos;s value and repeat 
              the process above. Finally, if the <CodeHighlight>NODE_ENV</CodeHighlight> is not present in the file, Athenna 
              will load the <CodeHighlight>.env</CodeHighlight> file by default if it exists.
            </Paragraph>

            <Paragraph align='justify'>
              Running providing <CodeHighlight>--env</CodeHighlight> flag in Artisan:
            </Paragraph>

            <CodeBox language='bash' code={`./node artisan serve --env=local`}/>

            <Paragraph align='justify'>
              Running providing <CodeHighlight>NODE_ENV</CodeHighlight> externally:
            </Paragraph>

            <CodeBox language='bash' code={`NODE_ENV=local ./node artisan serve`}/>

            <Paragraph align='justify'>
              Let&apos;s check some pratical examples. This is the default <CodeHighlight>.env</CodeHighlight> file that comes in Athenna project:
            </Paragraph>

            <CodeBox language='markdown' code={
              'HOST=localhost\n' +
              'PORT=1335\n' +
              'NODE_ENV=local\n\n' +

              'APP_NAME=Athenna\n' +
              'APP_DEBUG=true\n' +
              'APP_URL=http://${HOST}:${PORT}\n' +
              'APP_DOMAIN=${HOST}\n' +
              'APP_DOCUMENTATION=${APP_URL}\n' +
              'APP_SOURCE=https://github.com/AthennaIO\n\n' +

              'LOG_HTTP=true\n' +
              'LOG_CHANNEL=application'
            } />

            <Paragraph align='justify'>
              In the <CodeHighlight>.env</CodeHighlight> file above, you can see that we have the <CodeHighlight>NODE_ENV=local</CodeHighlight>.
              This means that if you create a new <CodeHighlight>.env.local</CodeHighlight> file in your project root path, Athenna will load
              it instead of <CodeHighlight>.env</CodeHighlight> if running your application without a predefined environment.
            </Paragraph>

            <Box mt='md'>
              <Topic size='xl' pb='xs'>Get an environment variable value</Topic>

              <Paragraph align='justify'>
                You can get environment variables using the <CodeHighlight>Env</CodeHighlight> function:
              </Paragraph>

              <CodeBox language='typescript' code={
                  "import { Env } from '@athenna/config'\n\n" +

                  "const defautValue = 'Athenna'\n\n" +

                  "const appName = Env('APP_NAME', defaultValue)"
              } />

              <Paragraph align='justify'>
                All environment variables in your <CodeHighlight>.env</CodeHighlight> file and inside <CodeHighlight>process.env</CodeHighlight> object
                are always interpreted as strings. But when using the <CodeHighlight>Env</CodeHighlight> function, it will auto cast the
                value for you. Check the comparison:
              </Paragraph>

              <Table>
                <thead>
                  <tr>
                    <td align='center' className="drac-text drac-text-white">Value in .env</td>
                    <td align='center' className="drac-text drac-text-white">Value returned by Env function</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="drac-text drac-text-white">true</td>
                    <td className="drac-text drac-text-yellow">true</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-yellow">&quot;true&quot;</td>
                    <td className="drac-text drac-text-yellow">true</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">10</td>
                    <td className="drac-text drac-text-yellow">10</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-yellow">&quot;10&quot;</td>
                    <td className="drac-text drac-text-yellow">10</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">10.090909</td>
                    <td className="drac-text drac-text-yellow">10.090909</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-yellow">&quot;10.090909&quot;</td>
                    <td className="drac-text drac-text-yellow">10.090909</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">{'{'}&quot;name&quot;:&quot;Paulo&quot;{'}'}</td>
                    <td className="drac-text drac-text-yellow">{'{'} name: &quot;Paulo&quot; {'}'}</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-yellow">&quot;{'{'}&quot;name&quot;:&quot;Paulo&quot;{'}'}&quot;</td>
                    <td className="drac-text drac-text-yellow">{'{'} name: &quot;Paulo&quot; {'}'}</td>
                  </tr>
                </tbody>
              </Table>

              <Paragraph align='justify'>
                Let&apos;s see a more practical example of it:
              </Paragraph>

              <CodeBox language='typescript' code={
                "process.env.PORT = '3000'\n" +
                "process.env.APP_DEBUG = 'true'\n" +
                `process.env.APP_JSON = '{"name":"Paulo"}'\n\n` +

                "console.log(Env('PORT')) // 3000 <- number\n" +
                "console.log(Env('APP_DEBUG')) // true <- boolean\n" +
                `console.log(Env('APP_JSON')) // { name: "Paulo" } <- object`
              } />

              <Paragraph align='justify'>
                There will certainly have scenarios in your business rule where you explicitly need an environment variable with value
                true, 10 or {'{'}&quot;name&quot;:&quot;Paulo&quot;{'}'} to be a string. To solve this you can turn off the auto cast when using the <CodeHighlight>Env</CodeHighlight> function:
              </Paragraph>

              <CodeBox language='typescript' code={
                  "process.env.PORT = '3000'\n" +
                  "process.env.APP_DEBUG = 'true'\n" +
                  `process.env.APP_JSON = '{"name":"Paulo"}'\n\n` +

                  'const autoCast = false\n' +
                  'const defaultValue = undefined\n\n' +

                  "console.log(Env('PORT', defaultValue, autoCast)) // 3000 <- string\n" +
                  "console.log(Env('APP_DEBUG', defaultValue, autoCast)) // true <- string\n" +
                  `console.log(Env('APP_JSON', defaultValue, autoCast)) // {"name":"Paulo"} <- string`
              } />

              <Paragraph align='justify'>
                Environment variables can parse other environment variables too. See the example above:
              </Paragraph>

              <CodeBox language='markdown' code={
                  'HOST=localhost\n' +
                  'PORT=3000\n\n' +

                  'APP_URL=http://${HOST}:${PORT}'
              } />

              <CodeBox language='typescript' code={
                  `console.log(Env('APP_URL')) // "http://localhost:3000"`
              } />
            </Box>
          </Box>
        </Box>
        
        <Box mt='md'>
          <Topic size='xl' pb='xs'>Configuration files</Topic>

          <Paragraph align='justify'>
            All the configuration files for the Athenna framework are stored in
            the <CodeHighlight>config</CodeHighlight> directory if you are using
            Laravel based project template. Each option is documented, so feel
            free to look through the files and get familiar with the options available
            to you.
          </Paragraph>

          <Paragraph align='justify'>
            Athenna needs almost no additional configuration out of the box. You are free
            to get started developing! Each option is documented, so feel free to look through
            the files and get familiar with the options available to you. It contains several
            options such as <CodeHighlight>debug</CodeHighlight>, <CodeHighlight>environment</CodeHighlight> and <CodeHighlight>locale</CodeHighlight> that
            you may wish to change according to your application.
          </Paragraph>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Manipulating configuration values</Topic>

            <Paragraph align='justify'>
              You may easily access your configuration values using the global <CodeHighlight>Config</CodeHighlight> helper
              class. The configuration values may be accessed using <CodeHighlight>&quot;dot (.)&quot;</CodeHighlight> syntax, which
              includes the name of the file and option you wish to access. Let&apos;s cover some methods bellow:
            </Paragraph>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.get</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>get</CodeHighlight> method will return the value of your configuration. You can also set
                a default value as second parameter that will be returned if the configuration option does not exist:
              </Paragraph>

              <CodeBox language='typescript' code={
                `import { Config } from '@athenna/config'\n\n` +

                `const defaultValue = 'Athenna'\n` +
                `const name = Config.get('app.name', defaultValue)\n\n` +

                `console.log(name) // MyAppName`
              } />

              <Admonition type='tip'>
                <Paragraph align='justify' size='sm'>
                  You can get all the configuration values using <CodeHighlight>get</CodeHighlight> method without any key:
                </Paragraph>

                <CodeBox language='typescript' code={
                    'console.log(Config.get()) // { app: {...}, http: {...}, ... }'
                } />
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.set</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>set</CodeHighlight> method is very useful to set or change the value of some
                configuration in runtime:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `Config.set('app.name', 'Athenna Framework')\n\n` +

                  `console.log(Config.get('app.name')) // Athenna Framework`
              } />

              <Admonition type='warning'>
                <Paragraph align='justify' size='sm'>
                  The <CodeHighlight>Config.set</CodeHighlight> method does not change the values in the configuration
                  file, only in runtime. To do that you will need to use the <CodeHighlight href='/docs/getting-started/configuration#config.rewrite'>Config.rewrite</CodeHighlight> method.
                </Paragraph>
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.safeSet</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                If you are not sure if some configuration value is already set of not you can use
                the <CodeHighlight>safeSet</CodeHighlight> method instead to not overwrite something
                that was already defined:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `console.log(Config.get('app.name')) // MyAppName\n\n` +
                  `Config.safeSet('app.name', 'Athenna Framework')\n\n` +

                  `console.log(Config.get('app.name')) // MyAppName`
              } />
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.delete</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>delete</CodeHighlight> method could be used to delete some configuration value:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `Config.delete('app.name')\n\n` +

                  `console.log(Config.get('app.name')) // undefined`
              } />

              <Admonition type='warning'>
                <Paragraph align='justify' size='sm'>
                  Just like <CodeHighlight>Config.set</CodeHighlight> method, <CodeHighlight>Config.delete</CodeHighlight> does not change
                  the values in the configuration file, only in runtime. To do that you will need to use
                  the <CodeHighlight href='/docs/getting-started/configuration#config.rewrite'>Config.rewrite</CodeHighlight> method.
                </Paragraph>
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.rewrite</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>rewrite</CodeHighlight> method is very usefull for rewriting the configuration file. Very
                usefull when you want to programmatically modify the configuration file source code. This method uses
                the <CodeHighlight href='https://github.com/unjs/magicast'>magicast</CodeHighlight> library under the hood to do that:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `Config.set('app.name', 'Athenna Framework')\n\n` +

                  `await Config.rewrite('app')`
              } />

              <Admonition type='tip'>
                <Paragraph align='justify' size='sm'>
                  Let&apos;s suppose that you want to set a function as value, you can use <CodeHighlight>builders.functionCall</CodeHighlight> function
                  of <CodeHighlight href='https://github.com/unjs/magicast'>magicast</CodeHighlight> library to do that:
                </Paragraph>

                <CodeBox language='typescript' code={
                    `import { builders } from 'magicast'\n` +
                    `import { Config } from '@athenna/config'\n\n` +

                    `Config.set('app.name', builders.functionCall('Env', ['MY_APP_NAME']))\n\n` +

                    `await Config.rewrite('app')`
                } />

                <Paragraph align='justify' size='sm'>
                  The example above will produce the following code in <CodeHighlight>config/app.ts</CodeHighlight>
                </Paragraph>

                <CodeBox language='typescript' code={
                    `export default {\n` +
                    `  name: Env('MY_APP_NAME')\n` +
                    '  ...\n' +
                    `}`
                } />
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.is</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>is</CodeHighlight> method could be used to validate if your configuration value
                match some other value:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `if (Config.is('app.name', 'Athenna')) {\n` +
                  `  // do something\n` +
                  `}`
              } />

              <Paragraph align='justify'>
                You can set an array as second parameter to <CodeHighlight>is</CodeHighlight> method. If any value in the array matches
                the configuration value, the method will return <CodeHighlight>true</CodeHighlight>:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `if (Config.is('app.name', ['Athenna', 'MyAppName'])) {\n` +
                  `  // do something\n` +
                  `}`
              } />

              <Admonition type='tip'>
                <Paragraph align='justify' size='sm'>
                  You can use the <CodeHighlight>isNot</CodeHighlight> method to do the negate validation.
                </Paragraph>
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.existsAll</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>existsAll</CodeHighlight> method could be used to validate if an array of configuration keys exists or not:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `if (Config.existsAll(['app.name', 'app.version'])) {\n` +
                  `  // do something\n` +
                  `}`
              } />

              <Admonition type='tip'>
                <Paragraph align='justify' size='sm'>
                  You can use the <CodeHighlight>notExistsAll</CodeHighlight> method to do the negate validation.
                </Paragraph>
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.clear</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>clear</CodeHighlight> method could be used to clear all the configuration values:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Config } from '@athenna/config'\n\n` +

                  `Config.clear()\n\n` +

                  `console.log(Config.get()) // {}`
              } />
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.load</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>load</CodeHighlight> method could be used to load some configuration file path:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Path } from '@athenna/common'\n` +
                  `import { Config } from '@athenna/config'\n\n` +

                  `await Config.load(Path.stubs('config/test.ts'))\n\n` +

                  `console.log(Config.get('test')) // { ... }`
              } />
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.safeLoad</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>safeLoad</CodeHighlight> method will only load the file path if it is not defined:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Path } from '@athenna/common'\n` +
                  `import { Config } from '@athenna/config'\n\n` +

                  `await Config.safeLoad(Path.stubs('config/app.ts'))`
              } />
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>
                <CodeHighlight>Config.loadAll</CodeHighlight>
              </Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>loadAll</CodeHighlight> method will load all files found inside some configuration path:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { Path } from '@athenna/common'\n` +
                  `import { Config } from '@athenna/config'\n\n` +

                  `await Config.loadAll(Path.stubs('config'))`
              } />
            </Box>
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Define my own configuration path</Topic>

            <Paragraph align='justify'>
              If you are using the <CodeHighlight href='/docs/getting-started/installation#laravel-project-structure'>slim</CodeHighlight> project
              template version or you are building your own project structure you are not going to have
              the <CodeHighlight>config</CodeHighlight> directory in your project root path.
            </Paragraph>

            <Paragraph align='justify'>
              You will have two options now:
            </Paragraph>

            <OrderedList color='purple'>
              <li className='drac-text drac-text-white'>
                Create the <CodeHighlight>config</CodeHighlight> directory in your project root path.
              </li>
              <li className='drac-text drac-text-white'>
                Specify to Athenna a different path to your <CodeHighlight>config</CodeHighlight> directory.
              </li>
            </OrderedList>

            <Paragraph align='justify'>
              To do so, you can open the entrypoint of your application where you call <CodeHighlight>Ignite</CodeHighlight> class
              to bootstrap your application. If you are using <CodeHighlight href='/docs/getting-started/installation#laravel-project-structure'>slim</CodeHighlight> project
              template version you can find it inside <CodeHighlight>bin/main.ts</CodeHighlight>. Just set the relative or absolute
              path to your <CodeHighlight>config</CodeHighlight> directory in the options of <CodeHighlight>Ignite.load</CodeHighlight> method:
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { Ignite } from '@athenna/core'\n\n` +

              `const ignite = await new Ignite().load(import.meta.url, {\n` +
              `  configPath: './src/config'\n` +
              `})\n\n` +

              `...`
            } />
          </Box>

          <Box mt='md'>
            <Topic size='xl' pb='xs'>Debug mode</Topic>

            <Paragraph align='justify'>
              The debug option in your <CodeHighlight>config/app.ts</CodeHighlight> configuration file determines
              how much information about your application is actually displayed to you and for who is going to
              consume your application. By default, this option is set to respect the value of
              the <CodeHighlight>APP_DEBUG</CodeHighlight> environment variable, which is stored in
              your <CodeHighlight>.env</CodeHighlight> file.
            </Paragraph>

            <Paragraph align='justify'>
              For local development, you should set the <CodeHighlight>APP_DEBUG</CodeHighlight> environment
              variable to <CodeHighlight>true</CodeHighlight>. In your production and pipelines environment,
              this value should always be <CodeHighlight>true</CodeHighlight>. If the variable is set
              to <CodeHighlight>true</CodeHighlight> in production, you risk exposing sensitive configuration
              values to your application&apos;s end users.
            </Paragraph>
          </Box>
        </Box>
      </Box>
    )
  }
}
