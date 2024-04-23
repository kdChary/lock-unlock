// importing the necessary hooks.
import {useState} from 'react'

// importing styled components.
import {UnlockBg, ContentCard, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [locked, changeLock] = useState(true)

  const toggleLock = () => {
    changeLock(prevState => !prevState)
  }

  return (
    <UnlockBg>
      {locked ? (
        <ContentCard>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Text>Your Device is Locked</Text>
          <Button type="button" onClick={toggleLock}>
            Unlock
          </Button>
        </ContentCard>
      ) : (
        <ContentCard>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Text>Your Device is Unlocked</Text>
          <Button type="button" onClick={changeLock}>
            Lock
          </Button>
        </ContentCard>
      )}
    </UnlockBg>
  )
}

export default Unlock
