
import allGuides from './allGuidesQuery';
import getOmniItems from './getOmniItems';

function containsActiveLink(item, activePage) {
  if (item.link === activePage) {
    return true;
  } else if (item.children && item.children.length > 0) {
    for (let child of item.children) {
      if (containsActiveLink(child, activePage)) {
        return true;
      }
    }
  }
  return false;
}


// @todo, add a test for this.
const getOmniSidebarActiveSection = ({ activePage }) => {
  const OmniItems = getOmniItems();
  if (OmniItems) {
    for (let item of OmniItems) {
      if (containsActiveLink(item, activePage)) {
        return item;
      }
    }
  }
  return undefined;
};

// Searches through the top level items find the subdata structure that
// matches the parent path requested.
// todo, rename "maximumParent" to something better.
const findSubMenuItemsToUse = function (maximumParent, NestedItems) {
  for (let item of NestedItems) {
    if (item.link === maximumParent) {
      return item;
    }
  }
  return undefined;
}

// return an item list for a guide directory.
// guideDirectory is the directory name of the guide.
// AllGuides is the result of the allGuides query.
// For testing purposes, AllGuides can be directly set with the fixture
// allGuides.testfixtures.js
const getGuideDirectory = (guideDirectory, AllGuides = allGuides()) => {

  const ChildItems = [];
  var guideTitle = '';
  for (let item of AllGuides.allGuides.edges) {
    if (item.node.fields.guide_directory === guideDirectory) {
      ChildItems.push({
        link: item.node.fields.slug,
        title: item.node.frontmatter.subtitle,
      });
    }
    if (item.node.fields.slug === '/' + guideDirectory) {
      guideTitle = item.node.frontmatter.title;
    }
  }

  return {
    link: '/' + guideDirectory,
    title: guideTitle,
    children: ChildItems,
  };
};

export { findSubMenuItemsToUse, getGuideDirectory, getOmniSidebarActiveSection };