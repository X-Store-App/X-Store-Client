import React, { useState } from 'react'

import '../style/components/Content.sass'
import '../style/common.sass'

function Content (props: {frame: React.ReactNode}) {
	return (
		<div id="content">
			{
				props.frame
			}
		</div>)
}

export { Content }
