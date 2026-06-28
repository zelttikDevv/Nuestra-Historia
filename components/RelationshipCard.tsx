'use client';

import { motion } from 'framer-motion';
import { calculateRelationshipDuration } from '@/lib/utils';
import { relationshipData } from '@/data/relationship';

export function RelationshipCard() {
  const { years, months, days } = calculateRelationshipDuration(relationshipData.startDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/10 p-8 shadow-sm"
    >
      <div className="text-center space-y-4">
        <div className="text-sm text-muted-foreground uppercase tracking-wider">
          Desde
        </div>
        <div className="text-lg font-medium text-foreground">
          {relationshipData.startDate.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        
        <div className="pt-4 border-t border-primary/10">
          <div className="text-sm text-muted-foreground mb-3">
            Llevamos juntos
          </div>
          <div className="flex justify-center gap-6 text-center">
            <div>
              <div className="text-3xl font-light text-primary">{years}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {years === 1 ? 'año' : 'años'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-primary">{months}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {months === 1 ? 'mes' : 'meses'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-primary">{days}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {days === 1 ? 'día' : 'días'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
