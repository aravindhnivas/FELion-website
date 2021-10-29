<script >
    import Drawer, {
        Content,
        Header,
        Title,
        Subtitle,
    } from '@smui/drawer';
    import List, { Item, Text } from '@smui/list';
    export let open = false;
    export let active = 'Gray Kittens';
    export let items = ["Gray Kittens", "A Space Rocket", "100 Pounds of Gravel"]
</script>

<style>
    .drawer-container {
        position: relative;
        display: flex;



        overflow: hidden;
        z-index: 0;
        width: 100%;
        height: 100%;
  }
</style>
<div class="drawer-container">
    <Drawer variant="dismissible" bind:open >
        <Header>
        <Title>Super Drawer</Title>
        <Subtitle>It's the best drawer.</Subtitle>
        </Header>
        <Content>
        <List>
            {#each items as item}
                <Item href="javascript:void(0)" on:click={() => active = item } activated={active === item} >
                    <Text>{item}</Text>
                </Item>
            {/each}
            
        </List>
        </Content>
    </Drawer>
</div>