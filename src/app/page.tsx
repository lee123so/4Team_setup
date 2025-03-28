'use client';

import { useEffect, useState } from 'react';
import { addToast } from '@heroui/toast';
import { CheckboxGroup } from '@heroui/react';

import { MyButton } from '@/components/atoms/Button';
import useToast from '@/hooks/useToast';
import { MyInput } from '@/components/atoms/Input';
import { MyCheckbox } from '@/components/atoms/CheckBox';
// import Loading from '@/app/Loading';

export default function Home() {
  const { showToast } = useToast();
  const [selected, setSelected] = useState();

  useEffect(() => {
    // showToast({ title: 'Welcome', description: 'me', lazy: true });
    console.log(selected);
  }, [selected]);

  return (
    <>
      <MyButton
        color="main"
        size="full"
        onPress={() =>
          addToast({
            title: 'Toast title',
            description: 'Toast displayed successfully',
            color: 'primary',
          })
        }
      >
        버튼
      </MyButton>
      <div className="absolute ">d</div>
      <MyInput size="md" />

      {/* <MyListBox variant="test">
        <MyListboxItem>ff</MyListboxItem>
        <MyListboxItem>ff</MyListboxItem>

        <MyListboxItem>ff</MyListboxItem>

        <MyListboxItem>ff</MyListboxItem>
        <MyListboxItem>ff</MyListboxItem>
      </MyListBox> */}
      <CheckboxGroup
        color="warning"
        label="Select cities"
        value={selected}
        onValueChange={() => setSelected}
      >
        <MyCheckbox color="test" name="11:00" radius="bg_sm" value={'1'}>
          11:00
        </MyCheckbox>
        <MyCheckbox color="test" name="11:00" radius="bg_sm" value={'2'}>
          12:00
        </MyCheckbox>
        <MyCheckbox color="test" name="11:00" radius="bg_sm" value={'3'}>
          13:00
        </MyCheckbox>
      </CheckboxGroup>
      {/* <Loading /> */}
    </>
  );
}
