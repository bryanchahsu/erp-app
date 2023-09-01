import React from 'react';
import { Grid } from '@chakra-ui/react';

const GridContainer = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {/* Row 1 */}
      <div>1</div>
      <div>2</div>
      <div>3</div>

      {/* Row 2 */}
      <div>4</div>
      <div>5</div>
      <div>6</div>

      {/* Row 3 */}
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </Grid>
  );
};

export default GridContainer;
