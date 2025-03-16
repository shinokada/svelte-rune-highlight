<script>
	import { ButtonGroup, Button, GradientButton } from 'svelte-5-ui-lib';
	import {
		UserCircleSolid,
		AdjustmentsVerticalSolid,
		DownloadSolid
	} from 'svelte-5-ui-lib-icons';
	const handleClick = () => {
		alert('Clicked');
	};
</script>

<ButtonGroup>
  <Button outline color="dark">
      <UserCircleSolid class="me-2 h-3 w-3" />
      Profile
  </Button>
  <Button outline color="dark">
      <AdjustmentsVerticalSolid class="me-2 h-3 w-3" />
      Settings
  </Button>
  <Button outline color="dark">
      <DownloadSolid class="me-2 h-3 w-3" />
      Download
  </Button>
</ButtonGroup>
