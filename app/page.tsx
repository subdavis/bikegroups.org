import LinkPile from './linkPile';
import Org, { OrgTitle } from './org';
import OrgEvents from './OrgEvents';
import OrgList from './orglist';
import { TagNavigator } from './tags';

const orgs = OrgList();

export default function Home() {
  return (
    <main>
      <TagNavigator className="my-10" />
      {orgs.map((params) => (
        <Org key={params.name} {...params} />
      ))}
    </main>
  );
}
