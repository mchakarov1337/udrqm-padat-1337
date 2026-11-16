import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SplitFeatureSection } from './components/SplitFeatureSection';
import { BottleCollectionSection } from './components/BottleCollectionSection';
import { HeritageSection } from './components/HeritageSection';
import { SignaturesCarousel } from './components/SignaturesCarousel';
import { DiscoverShowcase } from './components/DiscoverShowcase';
import { Footer } from './components/Footer';
import { EditorialModal, type ModalItem } from './components/EditorialModal';
import { PrivateViewingDrawer } from './components/PrivateViewingDrawer';

export default function App() {
  const [modalItem, setModalItem] = useState<ModalItem | null>(null);
  const [viewingOpen, setViewingOpen] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const handleToggleEdition = (title: string) => {
    setSelectedTitles((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const handleRequestViewingForTitle = (title: string) => {
    setSelectedTitles((prev) => (prev.includes(title) ? prev : [...prev, title]));
    setViewingOpen(true);
  };

  const handleExploreBottles = () => {
    const el = document.getElementById('bottles');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0A1E42]">
        <Navbar
          selectionCount={selectedTitles.length}
          onOpenViewing={() => setViewingOpen(true)}
        />

        <main className="flex-1">
          <HeroSection onExploreClick={handleExploreBottles} />

          <SplitFeatureSection
            onSelectStory={(story) => setModalItem({ type: 'story', data: story })}
          />

          <BottleCollectionSection
            onSelectBottle={(bottle) => setModalItem({ type: 'bottle', data: bottle })}
          />

          <HeritageSection />

          <SignaturesCarousel
            onSelectPieceDetails={(piece) => setModalItem({ type: 'piece', data: piece })}
            onAddPieceToViewing={handleRequestViewingForTitle}
          />

          <DiscoverShowcase
            selectedTitles={selectedTitles}
            onToggleEdition={handleToggleEdition}
          />
        </main>

        <Footer onOpenViewing={() => setViewingOpen(true)} />

        <EditorialModal
          item={modalItem}
          onClose={() => setModalItem(null)}
          onRequestViewing={handleRequestViewingForTitle}
        />

        <PrivateViewingDrawer
          open={viewingOpen}
          selectedTitles={selectedTitles}
          onRemoveTitle={(title) =>
            setSelectedTitles((prev) => prev.filter((item) => item !== title))
          }
          onClearAll={() => setSelectedTitles([])}
          onClose={() => setViewingOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
