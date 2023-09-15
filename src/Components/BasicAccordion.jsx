import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import HelloWordDiv from './HelloWordDiv';
import './basicAccordion.css'

export default function BasicAccordion() {
  const [checked, setChecked] = useState(false);

  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  function handelSwitch(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className='basic-accordion'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch
            {...label}
            color="secondary"
            checked={checked}
            onChange={handelSwitch}
          />
        </AccordionDetails>
      </Accordion>
      <HelloWordDiv checked={checked} />
    </div>
  );
}
