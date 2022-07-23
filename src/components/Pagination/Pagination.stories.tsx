import React, { useState } from 'react';
import Pagination from '@/components/Pagination';
import { Meta } from '@storybook/react';
import mdx from './Pagination.stories.mdx';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [page, setPage] = useState(args.currentPage);

  return <Pagination {...args} currentPage={page} onSelectPage={e => setPage(e)} />;
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  numberOfPagesToShow: 3,
  currentPage: 1
};

export const CustomLabelAndIcon = Template.bind({});
CustomLabelAndIcon.args = {
  totalPages: 10,
  numberOfPagesToShow: 3,
  currentPage: 1,
  buttonNextLabel: 'Next',
  buttonNextIcon: <span> &gt; </span>,
  buttonPrevLabel: 'Previous',
  buttonPrevIcon: <span> &lt; </span>
};
